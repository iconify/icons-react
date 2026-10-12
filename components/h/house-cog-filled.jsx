import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx1s_uslx.css';
import '../../css/w/w7l0nbbco.css';
import '../../css/y/yl6s3kuad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dx1s_uslx"/><path class="w7l0nbbco"/><path class="yl6s3kuad"/>`,
		"fallback": "lucide-extended:house-cog-filled",
	});
}

export default Component;
