import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vk02_tbbo.css';
import '../../css/a/aa9r_5b7w.css';
import '../../css/x/x2p_89n_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vk02_tbbo"/><path class="aa9r_5b7w"/><path class="x2p_89n_s"/></g>`,
		"fallback": "streamline-freehand-color:edit-quill-feather-1",
	});
}

export default Component;
