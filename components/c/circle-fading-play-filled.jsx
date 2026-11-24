import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arhhw8bcu.css';
import '../../css/a/aiztnfbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arhhw8bcu"/><path class="aiztnfbpp"/>`,
		"fallback": "lucide-extended:circle-fading-play-filled",
	});
}

export default Component;
