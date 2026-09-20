import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbt53ppzw.css';
import '../../css/h/h6vmeubyo.css';
import '../../css/h/hqt09q9_j.css';
import '../../css/u/urk3pm-li.css';
import '../../css/f/fookumwfa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbt53ppzw"/><path class="h6vmeubyo"/><path class="hqt09q9_j"/><path class="urk3pm-li"/><path class="fookumwfa"/>`,
		"fallback": "material-icon-theme:folder-gitlab",
	});
}

export default Component;
