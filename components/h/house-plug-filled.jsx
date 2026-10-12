import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g67_cgb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g67_cgb3d"/>`,
		"fallback": "lucide-extended:house-plug-filled",
	});
}

export default Component;
