import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdjwxdbku.css';
import '../../css/b/bpczg_bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdjwxdbku"/><path class="bpczg_bnl"/>`,
		"fallback": "streamline-ultimate:human-resources-network-bold",
	});
}

export default Component;
