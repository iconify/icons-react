import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g1nri2b1d {
  fill: var(--svg-color--3bc5f1, #3bc5f1);
  d: path("M11.73 8L0 22.03h63.47L51.743 8h-37.33z");
}

.h-k-fweoe {
  fill: var(--svg-color--00a5d7, #00a5d7);
  d: path("m31.889 8l-8.187 14.03l8.187 36.96l8.651-36.96z");
}

.i97xekb2b {
  fill: var(--svg-color--3bc5f1, #3bc5f1);
  d: path("m31.889 59.21l8.637-36.908H23.712z");
}

.jbve6jhfg {
  fill: var(--svg-color--00a5d7, #00a5d7);
  d: path("M11.824 8L0 22.14l31.917 37.07L63.62 22.158l.04-.018L51.838 8H14.506z");
}

.rxiqbwbas {
  fill: var(--svg-color--fff100, #fff100);
  d: path("m42.613 11.049l-1.533 6.716l-5.03-3.357v.004l2.852 6.01l-5.506 2l5.502 1.753l-2.808 6.081l4.99-3.423l1.544 6.718l1.546-6.718l4.99 3.423l-2.81-6.081l5.505-1.747v-.004l-5.505-2l2.81-6.081l-4.99 3.423z");
}
</style><path class="jbve6jhfg"/><path class="g1nri2b1d"/><path class="h-k-fweoe"/><path class="i97xekb2b"/><path class="rxiqbwbas"/>`,
		"fallback": "emojione-v1:gem-stone",
	});
}

export default Component;
