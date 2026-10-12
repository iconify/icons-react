import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ind2jwvlw.css';
import '../../css/v/vdxd2qb6h.css';
import '../../css/u/u3ebn3b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ind2jwvlw"/><path class="vdxd2qb6h"/><path class="u3ebn3b7u"/>`,
		"fallback": "lucide-extended:book-up-2-filled",
	});
}

export default Component;
