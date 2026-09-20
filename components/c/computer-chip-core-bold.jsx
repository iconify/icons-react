import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b892889sj.css';
import '../../css/p/pc0n9-bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b892889sj"/><path class="pc0n9-bvw"/>`,
		"fallback": "streamline-ultimate:computer-chip-core-bold",
	});
}

export default Component;
