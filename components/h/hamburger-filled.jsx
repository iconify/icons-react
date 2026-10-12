import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glnvg4bft.css';
import '../../css/v/vqic2ia8z.css';
import '../../css/u/u5f0yi99u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glnvg4bft"/><path clip-rule="evenodd" class="vqic2ia8z"/><path class="u5f0yi99u"/>`,
		"fallback": "lucide-extended:hamburger-filled",
	});
}

export default Component;
