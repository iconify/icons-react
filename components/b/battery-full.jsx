import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbgyxebnx.css';
import '../../css/r/rgh57kbim.css';
import '../../css/r/rucc6dwql.css';
import '../../css/i/iheflch2n.css';
import '../../css/l/ljceg_bfh.css';
import '../../css/a/anr1hgdji.css';
import '../../css/s/sg-m6-bmf.css';
import '../../css/p/pdkkg_w0o.css';
import '../../css/l/lsv5_vg8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbgyxebnx wm-shadow"/><path class="rgh57kbim wm-k"/><path class="rucc6dwql wm-k"/><path class="iheflch2n wm-a"/><path class="ljceg_bfh wm-a"/><path class="anr1hgdji wm-k"/><path class="sg-m6-bmf wm-k"/><path class="pdkkg_w0o wm-k"/><path class="lsv5_vg8u wm-a"/>`,
		"fallback": "withicons-pastel:battery-full",
	});
}

export default Component;
