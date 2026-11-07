import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/t/to9rn20st.css';
import '../../css/a/a7798gr_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path clip-rule="evenodd" class="to9rn20st"/><path class="a7798gr_o"/>`,
		"fallback": "solar:file-play-bold-duotone",
	});
}

export default Component;
