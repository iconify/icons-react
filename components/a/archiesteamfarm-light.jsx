import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i81glf6jl.css';
import '../../css/l/l7mnr242b.css';
import '../../css/f/fjc_neb3w.css';
import '../../css/w/wnntk5btw.css';
import '../../css/o/o74zwjd5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i81glf6jl"/><path class="l7mnr242b"/><path class="fjc_neb3w"/><path class="wnntk5btw"/><path class="o74zwjd5w"/>`,
		"fallback": "selfhst:archiesteamfarm-light",
	});
}

export default Component;
