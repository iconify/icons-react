import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh3kq1b_i.css';
import '../../css/r/r8r5pq-3q.css';
import '../../css/s/s1x1tpg8a.css';
import '../../css/o/oto8rgbgl.css';
import '../../css/m/m7gws1bdd.css';
import '../../css/k/kzrlzzbah.css';
import '../../css/c/cqwt2myrv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh3kq1b_i"/><path class="r8r5pq-3q"/><path class="s1x1tpg8a"/><path class="oto8rgbgl"/><path class="m7gws1bdd"/><path class="kzrlzzbah"/><path class="cqwt2myrv"/>`,
		"fallback": "streamline-emojis:four-leaf-clover",
	});
}

export default Component;
