import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdyaibcnu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdyaibcnu"/>`,
		"fallback": "streamline:health-medical-ribbon-2-ribbon-medical-cancer-health-beauty-symbol",
	});
}

export default Component;
