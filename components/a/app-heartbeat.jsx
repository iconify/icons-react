import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojvj-2bxz.css';
import '../../css/g/giecwuhng.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojvj-2bxz ouiIcon__fillSecondary"/><path class="giecwuhng"/>`,
		"fallback": "oui:app-heartbeat",
	});
}

export default Component;
