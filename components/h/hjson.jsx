import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al0fg069v.css';
import '../../css/x/x1_ejpb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al0fg069v"/><path class="x1_ejpb7j"/>`,
		"fallback": "material-icon-theme:hjson",
	});
}

export default Component;
