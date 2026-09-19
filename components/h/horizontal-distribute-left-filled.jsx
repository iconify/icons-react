import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m64_6gi5u.css';
import '../../css/h/hpml1nxgd.css';
import '../../css/z/zvvso5rkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m64_6gi5u"/><rect class="hpml1nxgd"/><rect class="zvvso5rkk"/>`,
		"fallback": "boxicons:horizontal-distribute-left-filled",
	});
}

export default Component;
