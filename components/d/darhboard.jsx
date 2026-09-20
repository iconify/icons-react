import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tdpwy51xn.css';
import '../../css/y/y5zapgiuw.css';
import '../../css/g/g7sevbc9z.css';
import '../../css/b/bckxs1bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><rect class="tdpwy51xn"/><rect class="y5zapgiuw"/><rect class="g7sevbc9z"/><rect class="bckxs1bbv"/></g>`,
		"fallback": "lets-icons:darhboard",
	});
}

export default Component;
