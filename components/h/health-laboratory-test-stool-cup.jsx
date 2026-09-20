import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-6wtf2xf.css';
import '../../css/h/h4na1ogqb.css';
import '../../css/y/y7f7bhyxg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-6wtf2xf"/><path class="h4na1ogqb"/><path class="y7f7bhyxg"/>`,
		"fallback": "streamline-pixel:health-laboratory-test-stool-cup",
	});
}

export default Component;
