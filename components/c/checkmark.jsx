import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un0prhb_g.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un0prhb_g"/>`,
		"fallback": "wpf:checkmark",
	});
}

export default Component;
