import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejki_ob7b.css';
import '../../css/i/igx7fitry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejki_ob7b"/><path class="igx7fitry"/>`,
		"fallback": "tdesign:git-repository-commits-filled",
	});
}

export default Component;
