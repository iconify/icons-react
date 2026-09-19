import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/krf-rdb_i.css';
import '../../css/r/rgzmy_bcu.css';
import '../../css/v/v-gpjyjys.css';
import '../../css/p/pkewsubsz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGP3x3Gdbc"><g class="aql7dnt-u"><path class="krf-rdb_i"/><path class="rgzmy_bcu"/><path class="v-gpjyjys"/><path class="pkewsubsz"/></g></mask></defs><path mask="url(#SVGP3x3Gdbc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:goblet-full",
	});
}

export default Component;
