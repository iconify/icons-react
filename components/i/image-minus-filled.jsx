import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9e3_dbsz.css';
import '../../css/b/b31iesblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k9e3_dbsz"/><path class="b31iesblw"/>`,
		"fallback": "lucide-extended:image-minus-filled",
	});
}

export default Component;
