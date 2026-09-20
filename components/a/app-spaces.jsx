import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx3heqy7f.css';
import '../../css/t/t5lk8xcct.css';
import '../../css/i/indyp0f7r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouiIcon__fillSecondary zx3heqy7f"/><path class="t5lk8xcct"/><path class="indyp0f7r ouiIcon__fillSecondary"/>`,
		"fallback": "oui:app-spaces",
	});
}

export default Component;
