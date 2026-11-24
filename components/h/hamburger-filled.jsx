import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glnvg4bft.css';
import '../../css/s/s4eha6bdb.css';
import '../../css/u/u5f0yi99u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glnvg4bft"/><path clip-rule="evenodd" class="s4eha6bdb"/><path class="u5f0yi99u"/>`,
		"fallback": "lucide-extended:hamburger-filled",
	});
}

export default Component;
