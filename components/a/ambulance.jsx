import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sby9fhzrn.css';
import '../../css/w/wz7q6c-jf.css';
import '../../css/u/ur1fbbx6g.css';
import '../../css/s/skvagnb5g.css';
import '../../css/b/bab9tpb3u.css';
import '../../css/o/okmqk_b8i.css';
import '../../css/z/zas3h2wss.css';
import '../../css/n/np1hk3v2o.css';
import '../../css/r/robt4blxz.css';
import '../../css/r/rdw5svqgd.css';
import '../../css/g/g-yrjy1-b.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sby9fhzrn"/><path class="wz7q6c-jf"/><path class="ur1fbbx6g"/><circle class="skvagnb5g"/><path class="bab9tpb3u"/><path class="okmqk_b8i"/><path class="zas3h2wss"/><path class="np1hk3v2o"/><path class="robt4blxz"/><path class="rdw5svqgd"/><path class="g-yrjy1-b"/>`,
		"fallback": "openmoji:ambulance",
	});
}

export default Component;
