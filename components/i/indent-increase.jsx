import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5owbxejs.css';
import '../../css/b/bh6mgkb1s.css';
import '../../css/h/honxv238r.css';
import '../../css/i/im7f93b8r.css';
import '../../css/v/vlwdw078f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5owbxejs wm-shadow"/><path class="bh6mgkb1s wm-k"/><path class="honxv238r wm-k"/><path class="im7f93b8r wm-a"/><path class="vlwdw078f wm-a"/>`,
		"fallback": "withicons-pastel:indent-increase",
	});
}

export default Component;
