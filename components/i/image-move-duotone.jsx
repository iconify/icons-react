import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogxoes63k.css';
import '../../css/z/zcqz9mbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogxoes63k"/><path class="zcqz9mbma"/>`,
		"fallback": "stash:image-move-duotone",
	});
}

export default Component;
