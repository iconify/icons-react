import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0-bq5bbi.css';
import '../../css/r/r_ni-0b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0-bq5bbi"/><path clip-rule="evenodd" class="r_ni-0b-q"/>`,
		"fallback": "lucide-extended:ad-filled",
	});
}

export default Component;
