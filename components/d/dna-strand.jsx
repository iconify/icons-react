import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzp8_ubtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzp8_ubtw"/>`,
		"fallback": "streamline-cyber:dna-strand",
	});
}

export default Component;
