import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/optge0b5p.css';
import '../../css/b/bu36qkbnj.css';
import '../../css/x/x72nze-0i.css';
import '../../css/a/ad-cz_b4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="optge0b5p"/><path class="bu36qkbnj"/><ellipse transform="rotate(-45 255.99 175.996)" class="x72nze-0i"/><path class="ad-cz_b4j"/>`,
		"fallback": "famicons:business-outline",
	});
}

export default Component;
