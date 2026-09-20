import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iofn-nu-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="iofn-nu-j"/>`,
		"fallback": "wordpress:block-meta",
	});
}

export default Component;
