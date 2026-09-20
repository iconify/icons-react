import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z6r8905hb {
  fill: currentColor;
  d: path("M6.5 19q-1.896 0-3.198-1.302T2 14.5q0-1.829 1.226-3.098t2.87-1.368q.018-.373.208-.925q.19-.553.438-.951L3.216 4.63q-.141-.14-.15-.345q-.01-.203.15-.363q.159-.16.353-.16t.354.16l16.885 16.885q.14.14.152.341t-.152.366q-.16.16-.351.163q-.192.003-.357-.157L17.612 19zm14.408-.942L8.78 5.937q.875-.523 1.612-.73T12 5q2.502 0 4.251 1.749T18 11v1h.616q1.436.046 2.41 1.055T22 15.5q0 .687-.25 1.332t-.842 1.226");
}
</style><path class="z6r8905hb"/>`,
		"fallback": "material-symbols-light:cloud-off-rounded",
	});
}

export default Component;
