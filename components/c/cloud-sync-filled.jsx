import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyk60-btd.css';
import '../../css/j/jcbj2xbrn.css';
import '../../css/x/xe8-vm0oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyk60-btd"/><path class="jcbj2xbrn"/><path class="xe8-vm0oy"/>`,
		"fallback": "lucide-extended:cloud-sync-filled",
	});
}

export default Component;
