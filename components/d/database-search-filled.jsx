import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vapumvfpg.css';
import '../../css/e/edfoyo7yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vapumvfpg"/><path clip-rule="evenodd" class="edfoyo7yi"/>`,
		"fallback": "lucide-extended:database-search-filled",
	});
}

export default Component;
