import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ujkefybfc.css';
import '../../css/m/my5268blj.css';
import '../../css/n/ndq0ugbyy.css';
import '../../css/z/zvr2xvbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ujkefybfc"/><path class="my5268blj"/><path class="ndq0ugbyy"/><path class="zvr2xvbqf"/></g>`,
		"fallback": "solar:clipboard-text-broken",
	});
}

export default Component;
