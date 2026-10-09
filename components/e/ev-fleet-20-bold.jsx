import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppqe_vbbp.css';
import '../../css/n/n882cmbjh.css';
import '../../css/b/bnkapgrzq.css';
import '../../css/c/cye3j4bfw.css';
import '../../css/p/py33n5ppk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppqe_vbbp"/><path class="n882cmbjh"/><path class="bnkapgrzq"/><path class="cye3j4bfw"/><path class="py33n5ppk"/>`,
		"fallback": "energy-icons:ev-fleet-20-bold",
	});
}

export default Component;
