import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crecepuob.css';
import '../../css/r/ru8yytb_a.css';
import '../../css/h/hnlo6mb_q.css';
import '../../css/o/okd6m0p8b.css';
import '../../css/b/b4yjfqbmu.css';
import '../../css/l/lgcp1rrwr.css';
import '../../css/h/hmds5cbkv.css';
import '../../css/d/dg0406s-c.css';
import '../../css/h/hxm8twbeg.css';
import '../../css/m/miy_keb-x.css';
import '../../css/f/fl3l_kqfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crecepuob wm-shadow"/><path class="ru8yytb_a wm-k"/><path class="hnlo6mb_q wm-k"/><path class="okd6m0p8b wm-k"/><path class="b4yjfqbmu wm-k"/><path class="lgcp1rrwr wm-k"/><path class="hmds5cbkv wm-shine"/><path class="dg0406s-c wm-a"/><path class="hxm8twbeg wm-a"/><path class="miy_keb-x wm-a"/><path class="fl3l_kqfr wm-a"/>`,
		"fallback": "withicons-pastel:cloud-hail",
	});
}

export default Component;
