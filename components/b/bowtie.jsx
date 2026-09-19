import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me8xx5esy.css';
import '../../css/y/yyqg3mbar.css';
import '../../css/o/oh2rpjbhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me8xx5esy"/><path class="yyqg3mbar"/><path class="oh2rpjbhq"/>`,
		"fallback": "ion:bowtie",
	});
}

export default Component;
