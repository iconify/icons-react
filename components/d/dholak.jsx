import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gudtseebu.css';
import '../../css/b/bt-20ib5b.css';
import '../../css/i/ic1qrdb1c.css';
import '../../css/x/x48ej-bed.css';
import '../../css/p/pjjlemi1p.css';
import '../../css/o/o6tbgziri.css';
import '../../css/c/cal9packm.css';
import '../../css/f/fb_vyebhs.css';
import '../../css/u/u-u7edb2t.css';
import '../../css/z/zoxp7ackh.css';
import '../../css/e/eb6hz3b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gudtseebu wm-shadow"/><path class="bt-20ib5b wm-k"/><path class="ic1qrdb1c wm-k"/><path class="wm-k x48ej-bed"/><path class="pjjlemi1p wm-k"/><path class="o6tbgziri wm-k"/><path class="cal9packm wm-shine"/><path class="fb_vyebhs wm-k"/><path class="u-u7edb2t wm-k"/><path class="wm-k zoxp7ackh"/><path class="eb6hz3b-f wm-a"/>`,
		"fallback": "withicons-pastel:dholak",
	});
}

export default Component;
