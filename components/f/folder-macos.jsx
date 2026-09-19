import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3ugng94a.css';
import '../../css/t/tpkjvpb7r.css';
import '../../css/f/f5kqbbc0p.css';
import '../../css/g/gx65786ry.css';
import '../../css/b/bq5npuets.css';
import '../../css/z/zz_xz93yo.css';
import '../../css/m/mtgkmobyp.css';
import '../../css/u/ub_4nup-p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3ugng94a"/><path class="tpkjvpb7r"/><path class="f5kqbbc0p"/><path class="gx65786ry"/><path class="bq5npuets"/><path class="zz_xz93yo"/><path class="mtgkmobyp"/><path class="ub_4nup-p"/>`,
		"fallback": "catppuccin:folder-macos",
	});
}

export default Component;
