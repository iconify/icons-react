import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tozv2lbrl.css';
import '../../css/q/qk8hpubkt.css';
import '../../css/w/w51n_2blg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tozv2lbrl"/><path class="qk8hpubkt"/><path class="w51n_2blg"/>`,
		"fallback": "ant-design:fund-twotone",
	});
}

export default Component;
