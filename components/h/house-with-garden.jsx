import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zesbh3bgp.css';
import '../../css/t/tk0ccm2ej.css';
import '../../css/g/g3yge82zg.css';
import '../../css/s/sj7n74bwy.css';
import '../../css/a/aqck5xdae.css';
import '../../css/v/vc0xve0fk.css';
import '../../css/z/z04drlb1l.css';
import '../../css/h/hzk9tjbfn.css';
import '../../css/d/do2nkq21m.css';
import '../../css/x/xz8-jk03c.css';
import '../../css/t/tr0xct1ad.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zesbh3bgp"/><path class="tk0ccm2ej"/><path class="g3yge82zg"/><path class="sj7n74bwy"/><path class="aqck5xdae"/><path class="vc0xve0fk"/><g class="z04drlb1l"><path class="hzk9tjbfn"/><path class="do2nkq21m"/><path class="xz8-jk03c"/><path class="tr0xct1ad"/></g>`,
		"fallback": "openmoji:house-with-garden",
	});
}

export default Component;
