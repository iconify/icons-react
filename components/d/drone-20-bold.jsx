import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt1n5vgcf.css';
import '../../css/a/asggcsbcx.css';
import '../../css/p/pzsn-8bob.css';
import '../../css/b/b7d87qvzu.css';
import '../../css/c/cpm9ckb2h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt1n5vgcf"/><path class="asggcsbcx"/><path class="pzsn-8bob"/><path class="b7d87qvzu"/><path class="cpm9ckb2h"/>`,
		"fallback": "energy-icons:drone-20-bold",
	});
}

export default Component;
