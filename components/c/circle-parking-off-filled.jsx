import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beh5j7yso.css';
import '../../css/g/ggxl3abdx.css';
import '../../css/v/vgshsqbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="beh5j7yso"/><path class="ggxl3abdx"/><path class="vgshsqbxt"/>`,
		"fallback": "lucide-extended:circle-parking-off-filled",
	});
}

export default Component;
