import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo3fevbda.css';
import '../../css/g/gz7nuqwbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wo3fevbda"/><path class="gz7nuqwbc"/>`,
		"fallback": "lucide-extended:calendar-clock-filled",
	});
}

export default Component;
