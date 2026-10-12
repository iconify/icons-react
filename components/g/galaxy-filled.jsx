import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo0c38buo.css';
import '../../css/c/ciwabiowf.css';
import '../../css/d/diidstw8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo0c38buo"/><path clip-rule="evenodd" class="ciwabiowf"/><path class="diidstw8n"/>`,
		"fallback": "lucide-extended:galaxy-filled",
	});
}

export default Component;
