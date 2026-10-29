import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmmbso2mc.css';
import '../../css/h/hb11f522t.css';
import '../../css/u/uyvisycwv.css';
import '../../css/m/m52o71bpt.css';
import '../../css/q/qi7b_pb3f.css';
import '../../css/v/v9xy98bwo.css';
import '../../css/n/nyb0l7b9h.css';
import '../../css/a/ai7i5pj5l.css';
import '../../css/k/kjt61mbwh.css';
import '../../css/w/wadmbdc7z.css';
import '../../css/g/g04ig2b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmmbso2mc wm-shadow"/><path class="hb11f522t wm-k"/><path class="uyvisycwv wm-k"/><path class="m52o71bpt wm-k"/><path class="qi7b_pb3f wm-k"/><path class="v9xy98bwo wm-shine"/><path class="nyb0l7b9h wm-k"/><path class="ai7i5pj5l wm-a"/><path class="kjt61mbwh wm-a"/><path class="wadmbdc7z wm-a"/><path class="g04ig2b5e wm-a"/>`,
		"fallback": "withicons-plush:file-warning",
	});
}

export default Component;
