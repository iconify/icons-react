import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo3fevbda.css';
import '../../css/b/bdzyxqbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wo3fevbda"/><path class="bdzyxqbly"/>`,
		"fallback": "lucide-extended:folder-clock-filled",
	});
}

export default Component;
