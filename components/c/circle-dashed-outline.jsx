import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-im9mb6c.css';
import '../../css/t/t3kfh9mkc.css';
import '../../css/t/tir0e8b2v.css';
import '../../css/u/uykym04sg.css';
import '../../css/g/ggro-ib6z.css';
import '../../css/z/z1ndptpso.css';
import '../../css/t/ton8_ibtr.css';
import '../../css/x/xh1utkbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-im9mb6c"/><path class="t3kfh9mkc"/><path class="tir0e8b2v"/><path class="uykym04sg"/><path class="ggro-ib6z"/><path class="z1ndptpso"/><path class="ton8_ibtr"/><path class="xh1utkbug"/>`,
		"fallback": "solar:circle-dashed-outline",
	});
}

export default Component;
