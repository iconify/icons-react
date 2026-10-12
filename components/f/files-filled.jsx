import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc85bcglw.css';
import '../../css/s/slcvs4yrl.css';
import '../../css/g/gdfre-uew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc85bcglw"/><path class="slcvs4yrl"/><path class="gdfre-uew"/>`,
		"fallback": "lucide-extended:files-filled",
	});
}

export default Component;
