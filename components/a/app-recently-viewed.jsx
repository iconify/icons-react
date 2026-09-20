import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n90uq3bfu.css';
import '../../css/l/ljkivvbav.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n90uq3bfu"/><path class="ljkivvbav ouiIcon__fillSecondary"/>`,
		"fallback": "oui:app-recently-viewed",
	});
}

export default Component;
