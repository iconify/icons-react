import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tfhm310ni.css';
import '../../css/l/likfn3leu.css';
import '../../css/d/d8dp5ybad.css';
import '../../css/f/fsp7e6oiq.css';
import '../../css/r/rxp9hacif.css';
import '../../css/k/k94nzff5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tfhm310ni"/><path class="likfn3leu"/><path class="d8dp5ybad"/><path class="fsp7e6oiq"/><path class="rxp9hacif"/><path class="k94nzff5f"/></g>`,
		"fallback": "gcp:cloud-sql",
	});
}

export default Component;
